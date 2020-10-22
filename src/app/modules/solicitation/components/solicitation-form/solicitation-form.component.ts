import { WfUser } from './../../../../core/workflow/model/user';
import { WorkflowService } from './../../../../core/workflow/services/workflow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css'],
})
export class SolicitationFormComponent implements OnInit {
  public user: WfUser;

  constructor(private workflowService: WorkflowService) {}

  ngOnInit(): void {
    this.user = this.workflowService.getUser();
  }
}
