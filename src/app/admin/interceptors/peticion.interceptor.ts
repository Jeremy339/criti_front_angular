import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable()

export class peticionInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL' + req.url)

    let peticion = req.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc2EyQGdtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTg1ODE4MTcsImV4cCI6MTcxODU4MjQyMn0.Daqq76BRBW6diJmD03raUjKGn4RrPlxcnZVKNHoHyFk'
      }
    })
    return handler.handle(peticion).pipe(tap(() => { },

      (error: any) => {
        console.log("ERROR")
        if (error instanceof HttpErrorResponse) {
          if (error.status !== 401) {
            return
          }
          this.router.navigate(["auth/login"])
        }
      }
    ))
  }
}