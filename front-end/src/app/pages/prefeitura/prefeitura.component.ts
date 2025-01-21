import { Component, OnInit } from '@angular/core';
import { CidadaoDTO } from '../../../interfaces/CidadaoDTO';
import { PrefeiturasService } from '../../services/prefeituras/prefeituras.service';
import { Prefeitura } from '../../../interfaces/PrefeituraDTO';
import { ManifestationComponent } from '../../components/manifestation/manifestation.component';
import { CommonModule } from '@angular/common';
import { PostagensComponent } from "../../components/postagens/postagens.component";

@Component({
  selector: 'app-prefeitura',
  standalone: true,
  imports: [ManifestationComponent, CommonModule, PostagensComponent],
  templateUrl: './prefeitura.component.html',
  styleUrl: './prefeitura.component.sass',
})
export class PrefeituraComponent implements OnInit {
  prefeitura!: Prefeitura;

  cidade: string = 'teste';
  // img_perfil: string = "";
  // img_background: string = "";

  constructor(private prefeituraService: PrefeiturasService) {}

  ngOnInit(): void {
    this.prefeituraService.getPrefeitura(2).subscribe((prefeitura) => {
      this.prefeitura = prefeitura;
    });
  }

  getPrefeitura() {
    const user: CidadaoDTO = JSON.parse(localStorage.getItem('user')!);
  }
}
