import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NetlifyFormsService } from '../../netlify-forms/netlify-forms.service';
import { FormsModule }   from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent{
  // feedbackForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   email: ['', [Validators.email, Validators.required]],
  //   description: ['', Validators.required],
  // });
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern),
      ]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(150),
      ]),
    });
  }

  errorMsg = '';

  contactForm: FormGroup;
  constructor(  private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService,) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {}

  onResetForm() {
    this.contactForm.reset();
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

   onSubmit() {
   this.netlifyForms.submitFeedback(this.contactForm.value).subscribe(
     () => {
       this.contactForm.reset();
        this.router.navigateByUrl('/contact/success');
       },
      err => {
         this.errorMsg = err;
      }
   );
  }
  closeError() {
     this.errorMsg = '';
   }
}
