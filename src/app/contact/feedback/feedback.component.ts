import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NetlifyFormsService } from '../../netlify-forms/netlify-forms.service';

@UntilDestroy()
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent{
  feedbackForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    type: ['', Validators.required],
    description: ['', Validators.required],
    rating: [0, Validators.min(1)]
  });

  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService,
  ) { }

  onSubmit() {
    this.netlifyForms
      .submitFeedback(this.feedbackForm.value)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => this.feedbackForm.reset(),
        err => this.errorMsg = err,
        () => this.router.navigateByUrl('/success')
      );
  }

  closeError() {
    this.errorMsg = '';
  }
}