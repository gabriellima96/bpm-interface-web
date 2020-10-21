import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkflowService } from './../workflow/services/workflow.service';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(private workflowService: WorkflowService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BEARER_TOKEN = this.workflowService.getToken();
    request = request.clone({
      headers: request.headers
        .set('Authorization', BEARER_TOKEN)
        .set('Content-Type', 'application/json')
        .set('user', this.workflowService.getUser().username)
        .set('token', sessionStorage.getItem('senior-token')),
    });
    return next.handle(request);
  }
}
