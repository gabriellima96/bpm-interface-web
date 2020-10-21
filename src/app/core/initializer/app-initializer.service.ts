import { WorkflowService } from './../workflow/services/workflow.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  deps: [WorkflowService],
})
export class AppInitializerService {
  constructor(private workflowService: WorkflowService) {}

  async getCredentials() {
    try {
      const plataFormData = await this.workflowService.requestPlatformData();
      sessionStorage.setItem('senior-token', plataFormData.token.access_token);

      const userData = await this.workflowService.requestUserData();
      sessionStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      throw new Error(error);
    }
  }
}
