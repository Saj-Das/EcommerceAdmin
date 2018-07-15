import {Component, Input, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, EventEmitter, Output} from '@angular/core';

import {topnavComponent} from './topnav/topnav.component';
import { DynamicFormComponent } from '../dynamicForm/dynamicForm.component';
import { DynamicListComponent } from '../dynamic-list/dynamic-list.component';

var entity = { 
  form: DynamicFormComponent ,
  list:DynamicListComponent
};

@Component({
  selector: 'app-dynamic-for-tab',
  entryComponents: [ DynamicFormComponent,DynamicListComponent], // Reference to the components must be here in order to dynamically create them
  template: `
    <div #dynamicComponentContainer></div>
  `,
})

export  class DynamicComponentForTabs {
  currentComponent = null;
  @Output('switch') switch= new EventEmitter();
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  
  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }
   var componentName= entity[data.component]
    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
    
    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
    
    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(componentName);
    
    // We create the component using the factory and the injector
    let component = factory.create(injector);
    // component.type=data.inputs["type"];
    component.instance.type=data.inputs["type"];
    component.instance.switch.subscribe(x=> this.switch.emit(x));
    // console.log(component);
    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);
    
    // We can destroy the old component is we like by calling destroy
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
  }
  
  constructor(private resolver: ComponentFactoryResolver) {
    
  }
 
}
