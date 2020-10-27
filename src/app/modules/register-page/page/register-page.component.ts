import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { RegisterDataService } from '../services/register-data.service';
import { Register } from '../models/register';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

    loading: boolean = false;
    success: boolean = false;
    tError: boolean = false;

    userRegister: Register = new Register('', '', '', '', '', null, '');

    registerForm: FormGroup;
    
    paises: string[] = ['Argentina', 'Chile', 'Mexico', 'Colombia', 'Perú']; 
    provincias: string[] = [];
    codigoNac: string;

    submitted: boolean = false;

    regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&+=!_*-]{8,14}$/;
    regPassValid: boolean;

    password: string;
    passwordValid: boolean;
    minLenghtPass: boolean;

    repeatPassword: string;
    repeatPasswordValid: boolean;

    errorForm:boolean = false;

    subscribes: Subscription[] = [];

    constructor(private registerData: RegisterDataService,
                private router: Router,
                private fb: FormBuilder) { }

    ngOnInit(): void {
        this.formInit();
    }

    ngOnDestroy(){
        this.subscribes.forEach(s => s.unsubscribe());
    }

    formInit(){
        this.registerForm = this.fb.group({
            nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
            apellido: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
            pais: ['', [Validators.required]],
            provincia: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            telefono: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
            password: ['', [Validators.required]],
            repeatPassword: ['', [Validators.required]],
            terminosYcondiciones: [null, [Validators.required]],
        })
    }

    get f(){
        return this.registerForm.controls;
    }

    validarPassword(value){

        // Verificamos si existe algo en repetir contraseña
        if(this.repeatPassword != undefined){
            // Si existe verificamos que sea igual al value ingresado en password
            if(this.repeatPassword == value){
                this.repeatPasswordValid = true;
            }else{
                this.repeatPasswordValid = false;
            }
        }
        
        // Almacenamos el valor cargado en password
        this.password = value

        // validamos por reg pass si es valida
        this.regPassValid = this.regPass.test(value)

        // validamos si password tiene minimo 6 caracteres
        if(this.password.length >= 6){
            // Si lo tiene entonces la pass es valida
            this.passwordValid = true;
            this.minLenghtPass = true
        }else{
            // Pass invalida
            this.passwordValid = false;
            this.minLenghtPass = false
        }

    }

    validarRepeatPass(value){
        this.repeatPassword = value;

        if(this.repeatPassword == this.password){
            this.repeatPasswordValid = true;
        }else{
            this.repeatPasswordValid = false;
        }

    }

    changePais(value){
        switch(value){
            case 'Argentina' : 
                this.provincias = ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Chaco']; 
                this.codigoNac = '+54';
                break;
            case 'Chile': 
                this.provincias = ['Santiago', 'Valpraíso', 'Concepción', 'Copiapó'];
                this.codigoNac = '+56';
                break;
            case 'Mexico': 
                this.provincias = ['Ciudad de Mexico', 'Monterrey', 'Guadalajara', 'Cancún', 'Chihuahua'];
                this.codigoNac = '+52';
                break;
            case 'Colombia': 
                this.provincias = ['Bolívar', 'Boyacá', 'Caldas', 'Cauca', 'Magdalena'];
                this.codigoNac = '+57';
                break;
            case 'Perú': 
                this.provincias = ['Lima', 'Cusco', 'Arequipa', 'Ayacucho', 'Chimbote'];
                this.codigoNac = '+51';
                break;
            default: this.provincias = [];
        
            break;
        }
    }



    enviar(){
        this.submitted = true;

        if(this.registerForm.valid){
            this.loading=true
            this.errorForm = false;

            this.userRegister.name = this.registerForm.get('nombre').value;
            this.userRegister.last_name = this.registerForm.get('apellido').value
            this.userRegister.country = this.registerForm.get('pais').value
            this.userRegister.province = this.registerForm.get('provincia').value
            this.userRegister.mail = this.registerForm.get('email').value
            this.userRegister.phone = this.registerForm.get('telefono').value
            this.userRegister.password = this.registerForm.get('password').value

            this.subscribes.push(this.registerData.register(this.userRegister).subscribe(
                respuesta => {
                    if(respuesta){
                        this.success = true;

                        localStorage.setItem('token-wolox', JSON.stringify(respuesta.token));
                        this.loading=false
                        setTimeout(() => {
                            this.success = false
                        }, 3000);

                        this.router.navigate(['/listado']);
                        
                    }else{
                        // cartel de error
                        this.loading=false;
                        this.tError = true;
                        setTimeout(() => {
                            this.tError = false;
                        }, 2000);
                    }
                }, error => {
                    this.loading=false
                    this.tError = true;
                    setTimeout(() => {
                        this.tError = false;
                    }, 2000);
                }
            ))
            
        }else{
            this.registerForm.updateValueAndValidity();
            this.registerForm.markAllAsTouched();
            this.errorForm = true;
        }
    }

    atras(){
        this.router.navigate(['/'])
    }
}
