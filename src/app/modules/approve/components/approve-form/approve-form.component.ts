import {
  WfProcessStep,
  WorkflowCockpit,
} from './../../../../workflow-cockpit.d';
import { WorkflowService } from './../../../../core/workflow/services/workflow.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-form',
  templateUrl: './approve-form.component.html',
  styleUrls: ['./approve-form.component.css'],
})
export class ApproveFormComponent implements OnInit {
  nomeSolicitante: string;

  constructor(private workflowService: WorkflowService) {}

  ngOnInit(): void {
    // Buscar os dados das variáveis de processo da plataforma
    this.workflowService.requestProcessVariables().then((processVariavel) => {
      this.nomeSolicitante = processVariavel.nomeSolicitante;
    });

    // Associar o método de envio com a função da plataforma
    this.workflowService.onSubmit(this.onSubmit.bind(this));
  }

  onSubmit(info: WfProcessStep, dataPlataform: WorkflowCockpit) {
    // Verificação se o usuário selecionou Aprovar ou Reprovar
    if (info.nextAction.name === 'Aprovar') {
      // Enviar dados para preencher as variáveis de processo da plataforma
      return {
        formData: {},
      };
    } else {
      alert('Você não pode reprovar!');
      // Cancelar o envio das informações para a plataforma
      this.workflowService.abortSubmit();
    }
  }
}
