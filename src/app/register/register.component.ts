import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private router: Router) {}

  //need create validation of data fake or not data
  ngOnInit(): void {
    const fb = new FormBuilder();
    this.userForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      acceptPolicies: [false, [Validators.requiredTrue]]
    }, { validator: this.emailMatchValidator.bind(this) });
  }

  //need create validation whith brakend data an validate fake data 
  emailMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const email = group.get('email')?.value;
    const confirmEmail = group.get('confirmEmail')?.value;
    return email && confirmEmail && email === confirmEmail ? null : { 'emailMismatch': true };
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Formulario enviado:', this.userForm.value);
      // Aquí puedes agregar la lógica para enviar el formulario
    } else {
      console.error('Formulario inválido');
      // Marcar todos los campos como tocados para mostrar errores
      Object.values(this.userForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
  onBack(): void {
    console.log('Volver');
  }
  goToLogin(): void {
    console.log('Iniciar sesión');
    this.router.navigate(['/login'])
  }
}