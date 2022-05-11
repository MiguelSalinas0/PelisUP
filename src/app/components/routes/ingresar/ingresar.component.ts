import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [AuthService]
})

export class IngresarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),],],
    password: [, [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  Ingresar(){
    if(this.miFormulario.invalid)
      return
    const { email, password } = this.miFormulario.controls;
    this.authService.login(email.value, password.value).then(response => {
      if(!response)
        return
      localStorage.setItem('usuario', JSON.stringify(response.user))
      console.log("Se registro: ", response)
      this.router.navigate(['/home'])
    })
  }

  IngresarConGoogle(){
    this.authService.loginWithGoogle().then(response => {
      if(!response)
        return
      localStorage.setItem('usuario', JSON.stringify(response.user))
      console.log("Se registro: ", response)
      this.router.navigate(['/home'])
    })
  }
}