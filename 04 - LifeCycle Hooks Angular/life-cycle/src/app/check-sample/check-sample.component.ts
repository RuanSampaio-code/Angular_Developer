import { Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit, DoCheck,
						AfterContentChecked,
						AfterContentInit,
						AfterViewChecked,
						AfterViewInit,
						OnDestroy
 {
	quantidade:number = 0

	adicionar(){
		this.quantidade +=1
	}

	decrementar(){
		this.quantidade -=1
	}

  constructor() { }


	//quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	//depois da inicialização da View
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	//apos alguma alteração,verifca conteudo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	//Apos alguma alteração,
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}

	ngOnDestroy(): void {
		console.log("Good bye!");
	}

}
