import { WfUser } from './../../../../core/workflow/model/user';
import { WorkflowService } from './../../../../core/workflow/services/workflow.service';
import {
  WfProcessStep,
  WorkflowCockpit,
  WfFormData,
} from './../../../../workflow-cockpit.d';
import { Component, OnInit } from '@angular/core';
import { SolicitationService } from '../../solicitation.service';

@Component({
  selector: 'app-solicitation-form',
  templateUrl: './solicitation-form.component.html',
  styleUrls: ['./solicitation-form.component.css'],
})
export class SolicitationFormComponent implements OnInit {
  public user: WfUser;
  colaboradores = [];
  colaboradorSelecionado = undefined;

  constructor(
    private workflowService: WorkflowService,
    private solicitationService: SolicitationService
  ) {}

  ngOnInit(): void {
    // Pegar todas as informações do usuário logado
    this.user = this.workflowService.getUser();

    // Associar o método de envio com a função da plataforma
    this.workflowService.onSubmit(this.onSubmit.bind(this));

      // Buscar dados da G5
    this.solicitationService.buscarColaboradores()
      .subscribe(response => {
        this.colaboradores = response['colaboradores'];
      }, error => {
        console.log(error);
      });
  }

  onSubmit(info: WfProcessStep, dataPlataform: WorkflowCockpit) {

    // Verificação das regras de négocio.
    if (this.colaboradorSelecionado) {
      // Enviar dados para preencher as variáveis de processo da plataforma
      return {
        formData: {
          nomeSolicitante: this.user.fullname,
          nomfun: this.colaboradorSelecionado
        },
      };
    } else {
      // Cancelar o envio das informações para a plataforma
      this.workflowService.abortSubmit();
      alert('Selecione o colaborador')
    }
  }
}
