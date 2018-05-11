import { Component,Event,EventEmitter,State } from '@stencil/core';

@Component({
tag: 'search-bar',
    styleUrl: 'search-bar.scss'
})
export class SearchBarComponent {

    @Event() 
    onSearch : EventEmitter;

    @State()
    isValid:boolean = true; 

    submitHandler(ev){
        ev.preventDefault();
        const searchText = ev.target.querySelector('input').value;
        if(!searchText || searchText==''){
        this.isValid = false;
        setTimeout(()=>{this.isValid=true},2000);
        }else{
        this.isValid = true;
        this.onSearch.emit(searchText);
        }
    }

    inputHandler(ev){
        console.log(ev.target.value);
    }

    render() {
        return (
            <form onSubmit={ev=>this.submitHandler(ev)} class={!this.isValid?'animated shake':''}>
            <input type="text" class='search-input' placeholder="Where you wish to go..." onInput={this.inputHandler} />
            <button type="submit" class="submit-button">Search</button>
            </form>
        );
    }
}