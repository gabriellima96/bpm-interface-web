import { WfUser } from './../../../../core/workflow/model/user';
import { WorkflowService } from './../../../../core/workflow/services/workflow.service';
import {
  WfProcessStep,
  WorkflowCockpit,
  WfFormData,
} from './../../../../workflow-cockpit.d';
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
    // Pegar todas as informações do usuário logado
    this.user = this.workflowService.getUser();

    // Associar o método de envio com a função da plataforma
    this.workflowService.onSubmit(this.onSubmit.bind(this));
  }

  onSubmit(info: WfProcessStep, dataPlataform: WorkflowCockpit) {
    // Verificação das regras de négocio.
    if (true) {
      // Enviar dados para preencher as variáveis de processo da plataforma
      return {
        formData: {
          nomeSolicitante: this.user.fullname,
        },
      };
    } else {
      // Cancelar o envio das informações para a plataforma
      this.workflowService.abortSubmit();
    }
  }
}
