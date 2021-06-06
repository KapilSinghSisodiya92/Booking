import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup({ open, handleClose }) {
    const [url, setURL] = useState('');
    return (
        <div>
            <Dialog open={open} onClose={() => handleClose(url)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter Meeting URL</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        These details will be displayed on the event joining page for attendees
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="URL"
                        type="text"
                        fullWidth
                        onChange={(e) => setURL(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(url)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleClose(url)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
