import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../service/note.service';
import jwt_decode from 'jwt-decode';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  allNots:[];
  token:string;
  decoded:any;
  notID:string;
  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });
  editForm = new FormGroup({});

  constructor(private _NoteService: NoteService) {
    this.token = localStorage.getItem('TOKEN');
    this.decoded = jwt_decode(this.token);
    console.log('this.decoded', this.decoded);
    this.getnotes();
  }
  getnotes() {
    let data = {
      token: this.token,
      userID: this.decoded._id,
    };
    this._NoteService.getUserNote(data).subscribe((res) => {
      console.log(res);
      if (res.message == 'success') {
        this.allNots = res.Notes;
      }
      else
      {
        this.allNots = [];
      }
    });
  }
  addNote() {
    console.log(this.addForm);
    if (this.addForm.valid) {
      let data = {
        title: this.addForm.controls.title.value,
        desc: this.addForm.controls.desc.value,
        citizenID: this.decoded._id,
        token: this.token,
      };
      this._NoteService.addNote(data).subscribe((res) => {
        if (res.message == 'success') {
          this.getnotes();
          $('#addNote').modal('hide');
        }
      });
    }
  }
  getId(id) {
    console.log("id",id)
    this.notID=id;
  }
  deletNote() {
    let data = {
      NoteID:this.notID,
      token:this.token,
    };
    this._NoteService.deleteNote(data).subscribe((res)=>{
      console.log(res.message)
      if(res.message == 'deleted')
      {
        $('#deleteNote').modal('hide');
        this.getnotes();
      }
    })
  }
  ngOnInit(): void {
  }
}
