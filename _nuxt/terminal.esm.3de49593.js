import{ae as d,R as u,t as m,v as i,a7 as f,Y as t,y as a,Q as v,x as o,$ as y,a0 as g,a5 as h,ab as T}from"./entry.99263a14.js";import{s as w}from"./basecomponent.esm.476ddb1b.js";var l=d(),k=`
@layer primevue {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }

    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }

    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }

    .p-terminal-input::-ms-clear {
        display: none;
    }
}
`,x={root:"p-terminal p-component",content:"p-terminal-content",prompt:"p-terminal-prompt",command:"p-terminal-command",response:"p-terminal-response",container:"p-terminal-prompt-container",commandText:"p-terminal-input"},S=u.extend({name:"terminal",css:k,classes:x}),b={name:"BaseTerminal",extends:w,props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}},C={name:"Terminal",extends:b,data:function(){return{commandText:null,commands:[]}},mounted:function(){l.on("response",this.responseListener),this.$refs.input.focus()},updated:function(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount:function(){l.off("response",this.responseListener)},methods:{onClick:function(){this.$refs.input.focus()},onKeydown:function(n){n.code==="Enter"&&this.commandText&&(this.commands.push({text:this.commandText}),l.emit("command",this.commandText),this.commandText="")},responseListener:function(n){this.commands[this.commands.length-1].response=n}}};function B(e,n,K,L,p,r){return m(),i("div",t({class:e.cx("root"),onClick:n[2]||(n[2]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("root"),{"data-pc-name":"terminal"}),[e.welcomeMessage?(m(),i("div",f(t({key:0},e.ptm("welcomeMessage"))),a(e.welcomeMessage),17)):v("",!0),o("div",t({class:e.cx("content")},e.ptm("content")),[(m(!0),i(y,null,g(p.commands,function(s,c){return m(),i("div",t({key:s.text+c.toString()},e.ptm("commands")),[o("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),o("span",t({class:e.cx("command")},e.ptm("command")),a(s.text),17),o("div",t({class:e.cx("response"),"aria-live":"polite"},e.ptm("response")),a(s.response),17)],16)}),128))],16),o("div",t({class:e.cx("container")},e.ptm("container")),[o("span",t({class:e.cx("prompt")},e.ptm("prompt")),a(e.prompt),17),h(o("input",t({ref:"input","onUpdate:modelValue":n[0]||(n[0]=function(s){return p.commandText=s}),type:"text",class:e.cx("commandText"),autocomplete:"off",onKeydown:n[1]||(n[1]=function(){return r.onKeydown&&r.onKeydown.apply(r,arguments)})},e.ptm("commandText")),null,16),[[T,p.commandText]])],16)],16)}C.render=B;export{C as default};
