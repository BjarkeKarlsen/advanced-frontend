import { Component} from "@angular/core";
import { Logger} from "../services/logger";

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di-component.html'
})

export class HelloWorldDiComponent{
  count = 0;

  constructor(private logger: Logger) { }

  onLogMe(){
    this.logger.writeCount(this.count)
    this.count++
  }
}
