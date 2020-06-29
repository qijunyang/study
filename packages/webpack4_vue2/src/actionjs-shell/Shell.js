const template = `
    <div class="actionjs-shell" style="position:absolute;width:90%;height:400px;bottom:0;background:#ccc;">
        <div>
            <span>/</span><span class="actionjs-shell-input" style="">pwd</span>
        </div>
        <div class="actionjs-shell-log">
        
        </div>
    </div>
`;
export default class Shell {
   constructor(actionManager) {
       this.actionManager = actionManager;
       this.logs = [];
   }
   renderTo(id) {
       document.getElementById(id).innerHTML = template;
   }
   addLog(log) {
       this.logs.push(log);
   }
}