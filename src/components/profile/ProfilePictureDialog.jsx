'use strict';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import AvatarEditor from 'react-avatar-editor';
import {setPath} from '../../utils/RamdaUtils';
import IconZoomIn from '@material-ui/icons/ZoomIn';
import IconZoomOut from '@material-ui/icons/ZoomOut';
import IconRotateLeft from '@material-ui/icons/RotateLeft';
import IconRotateRight from '@material-ui/icons/RotateRight';
import IconAddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import LoadingIndicator from './../LoadingIndicator';
import Hammer from 'react-hammerjs';

const options = {
  recognizers: {
    pinch: { enable: true }
  }
};

class ProfilePictureDialog extends React.Component {

  state = {
    rotate: 0,
    scale: 1,
    zoom: 1.5,
    acceptAGB: false
  };

  handleUpload = e => {
    const {changeTempProfilePicture} = this.props;
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (e) => {
      const temp = {
        file: file,
        dataUrl: e.target.result
      };
      changeTempProfilePicture(temp);
    };
    this.setState(setPath(['errorText'], undefined, this.state));
    reader.readAsDataURL(file);
  };

  handleRequestSave = () => {
    const {file} = this.props.temp;
    if (!file) {
      this.setState(setPath(['errorText'], 'Bitte ein neues Bild auswählen', this.state));
      return;
    }
    const {acceptAGB} = this.state;
    if (!acceptAGB) {
      this.setState(setPath(['errorText'], 'Bitte die AGB akzeptieren', this.state));
      return;
    }

    // Upload the original image, transformation is done on the server to all required sizes
    const image = this.editor.getImage();
    image.toBlob(blob => {
      const formData = new FormData();
      formData.append('image', blob, file.name);
      this.props.onSave(formData);
    }, 'image/jpeg', 0.9);
  };

  handleRequestClose = () => {
    this.props.onClose();
    this.resetState();
  };

  setAvatarEditorRef = (editor) => {
    this.editor = editor;
  };

  resetState = () => {
    this.setState({acceptAGB: false, rotate: 0, errorText: undefined});
  };

  rotateLeft = () => {
    this.setState(setPath(['rotate'], this.state.rotate - 90, this.state));
  };

  rotateRight = () => {
    this.setState(setPath(['rotate'], this.state.rotate + 90, this.state));
  };

  zoomIn = () => {
    this.setState(setPath(['zoom'], this.state.zoom + 0.1, this.state));
  };

  zoomOut = () => {
    this.setState(setPath(['zoom'], this.state.zoom - 0.1, this.state));
  };

  pinch = e => {
    this.setState(setPath(['scale'], e.scale, this.state));
  };

  pinchEnd = () => {
    const newState = setPath(['zoom'], this.state.zoom * this.state.scale, this.state);
    this.setState(setPath(['scale'], 1, newState));
  };

  onCheckboxChange = event => {
    this.setState({acceptAGB: event.target.checked, errorText: undefined});
  };

  getInput = () => {
    return <input
      type={'file'}
      accept={'image/*'}
      name={'image'}
      style={{position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', opacity: '0'}}
      onChange={this.handleUpload}
    />;
  };

  render() {
    const {acceptAGB, rotate, zoom, errorText, scale} = this.state;
    const {show, temp, pending} = this.props;

    return (
      <Dialog
        title='Profilbild ändern'
        fullScreen
        onClose={this.handleRequestClose}
        open={show}>
        <DialogContent style={{padding: '0px'}}>
          <Grid container spacing={16} justify="center" style={{width: '100%', margin: '0px'}}>
            <Grid item xs={12} sm={8} md={6} style={{position: 'relative', padding: '0px'}}>
              <Hammer options={options} onPinch={this.pinch} onPinchEnd={this.pinchEnd}>
                <div>
                  <AvatarEditor
                    ref={this.setAvatarEditorRef}
                    image={temp.dataUrl}
                    width={300}
                    height={300}
                    border={[75, 75]}
                    color={[100, 100, 100, 0.75]}
                    scale={zoom * scale}
                    rotate={rotate}
                    style={{width: '100%', height: '100%'}}
                  />
                </div>
              </Hammer>
              {
                temp.dataUrl
                  ? undefined
                  : this.getInput()
              }
              <div style={{
                position: 'absolute',
                width: '100%',
                bottom: '0px',
                padding: '16px auto',
                textAlign: 'center'
              }}>
                <IconButton style={{color: 'white'}}>
                  <IconAddPhotoAlternate/>
                  {this.getInput()}
                </IconButton>
                <IconButton onClick={this.zoomIn} style={{color: 'white'}}>
                  <IconZoomIn/>
                </IconButton>
                <IconButton onClick={this.zoomOut} style={{color: 'white'}}>
                  <IconZoomOut/>
                </IconButton>
                <IconButton onClick={this.rotateRight} style={{color: 'white'}}>
                  <IconRotateRight/>
                </IconButton>
                <IconButton onClick={this.rotateLeft} style={{color: 'white'}}>
                  <IconRotateLeft/>
                </IconButton>
              </div>
            </Grid>

            <Grid item xs={12} style={{padding: '24px', width: '100%'}}>
              <Typography>Wähle einen Bildausschnitt für Dein neues Profilbild
                und klicke anschließend auf Speichern.
                Mit dem Speichern bestätigst Du, dass Du die Rechte an diesem Bild besitzt
                und es nicht gegen unsere AGB verstößt.
              </Typography>
              <FormControl required error={!!errorText}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id='acceptAGB'
                      checked={acceptAGB}
                      onChange={this.onCheckboxChange}
                    />
                  }
                  label={'ich stimme zu'}
                />
                <FormHelperText>{errorText}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        {
          pending
            ? <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
                <LoadingIndicator label='speichern...'/>
              </div>
            : undefined
        }

        <DialogActions>
          <Button onClick={this.handleRequestSave} color="primary" disabled={pending}>Speichern</Button>
          <Button onClick={this.handleRequestClose} disabled={pending}>Abbrechen</Button>
        </DialogActions>
      </Dialog>
    );
  };
}

export default ProfilePictureDialog;