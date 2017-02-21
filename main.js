function run()
{
var processControlOverrideStyleId = "processControlCustomColorOverride";
if (!window.parent.document.getElementById(processControlOverrideStyleId)) return;

var activeProcessControlTheme =
{
    completeStage: {
        selected: {
            foreground: "#000000",
            background: "#f65314"
        },
        normal: {
            foreground: "#000000",
            background: "#ffbb00"
        }
    },
    incompleteStage: {
        selected: {
            foreground: "#000000",
            background: "#00a1f1"
        },
        normal: {
            foreground: "#000000",
            background: "#7cbb00"
        }
    },
    hover:
    {
        completeStage: {
            selected: {
                foreground: "#ffffff",
                background: "#852905"
            },
            normal: {
                foreground: "#ffffff",
                background: "#805e00"
            }
        },
        incompleteStage: {
            selected: {
                foreground: "#ffffff",
                background: "#004b70"
            },
            normal: {
                foreground: "#ffffff",
                background: "#293d00"
            }
        }
    } 
};

var abandonedProcessControlTheme =
{
    completeStage: {
        selected: {
            foreground: "#ffffff",
            background: "#000000"
        },
        normal: {
            foreground: "#ffffff",
            background: "#333333"
        }
    },
    incompleteStage: {
        selected: {
            foreground: "#000000",
            background: "#666666"
        },
        normal: {
            foreground: "#000000",
            background: "#999999"
        }
    },
    hover:
    {
        completeStage: {
            selected: {
                foreground: "#000000",
                background: "#00a1f1"
            },
            normal: {
                foreground: "#000000",
                background: "#00a1f1"
            }
        },
        incompleteStage: {
            selected: {
                foreground: "#000000",
                background: "#00a1f1"
            },
            normal: {
                foreground: "#000000",
                background: "#00a1f1"
            }
        }
    } 
};

var processControlOverrideStyle = window.parent.document.createElement('style');
processControlOverrideStyle.id = processControlOverrideStyleId;
switch(Xrm.Page.context.client.getFormFactor())
{
    case 1:
        processControlOverrideStyle.innerHTML = `.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea span.stageNameContent{color:${activeProcessControlTheme.incompleteStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea div.stageIconHolder{color:${activeProcessControlTheme.incompleteStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea{background-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:after{border-left-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:before{border-top-color:${activeProcessControlTheme.incompleteStage.normal.background};border-bottom-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea span.stageNameContent{color:${activeProcessControlTheme.incompleteStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea div.stageIconHolder{color:${activeProcessControlTheme.incompleteStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea{background-color:${activeProcessControlTheme.incompleteStage.selected.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:after{border-left-color:${activeProcessControlTheme.incompleteStage.selected.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:before{border-top-color:${activeProcessControlTheme.incompleteStage.selected.background};border-bottom-color:${activeProcessControlTheme.incompleteStage.selected.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea span.stageNameContent{color:${activeProcessControlTheme.completeStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea div.stageIconHolder{color:${activeProcessControlTheme.completeStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea{background-color:${activeProcessControlTheme.completeStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:after{border-left-color:${activeProcessControlTheme.completeStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:before{border-top-color:${activeProcessControlTheme.completeStage.normal.background};border-bottom-color:${activeProcessControlTheme.completeStage.normal.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea span.stageNameContent{color:${activeProcessControlTheme.completeStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea div.stageIconHolder{color:${activeProcessControlTheme.completeStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea{background-color:${activeProcessControlTheme.completeStage.selected.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:after{border-left-color:${activeProcessControlTheme.completeStage.selected.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:before{border-top-color:${activeProcessControlTheme.completeStage.selected.background};border-bottom-color:${activeProcessControlTheme.completeStage.selected.background}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:hover span.stageNameContent{color:${activeProcessControlTheme.hover.incompleteStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:hover div.stageIconHolder{color:${activeProcessControlTheme.hover.incompleteStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:hover{background-color:${activeProcessControlTheme.hover.incompleteStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:hover:after{border-left-color:${activeProcessControlTheme.hover.incompleteStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage .processStageTailContainer div.stageContentArea:hover:before{border-top-color:${activeProcessControlTheme.hover.incompleteStage.normal.background};border-bottom-color:${activeProcessControlTheme.hover.incompleteStage.normal.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:hover span.stageNameContent{color:${activeProcessControlTheme.hover.incompleteStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:hover div.stageIconHolder{color:${activeProcessControlTheme.hover.incompleteStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:hover{background-color:${activeProcessControlTheme.hover.incompleteStage.selected.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:hover:after{border-left-color:${activeProcessControlTheme.hover.incompleteStage.selected.background}}.processControlContainer .processStageContainer.selectedStage .processStageTailContainer div.stageContentArea:hover:before{border-top-color:${activeProcessControlTheme.hover.incompleteStage.selected.background};border-bottom-color:${activeProcessControlTheme.hover.incompleteStage.selected.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:hover span.stageNameContent{color:${activeProcessControlTheme.hover.completeStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:hover div.stageIconHolder{color:${activeProcessControlTheme.hover.completeStage.normal.foreground}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:hover{background-color:${activeProcessControlTheme.hover.completeStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:hover:after{border-left-color:${activeProcessControlTheme.hover.completeStage.normal.background}}.processControlContainer .processStageContainer.unselectedStage.completedStage .processStageTailContainer div.stageContentArea:hover:before{border-top-color:${activeProcessControlTheme.hover.completeStage.normal.background};border-bottom-color:${activeProcessControlTheme.hover.completeStage.normal.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:hover span.stageNameContent{color:${activeProcessControlTheme.hover.completeStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:hover div.stageIconHolder{color:${activeProcessControlTheme.hover.completeStage.selected.foreground}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:hover{background-color:${activeProcessControlTheme.hover.completeStage.selected.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:hover:after{border-left-color:${activeProcessControlTheme.hover.completeStage.selected.background}}.processControlContainer .processStageContainer.selectedStage.completedStage .processStageTailContainer div.stageContentArea:hover:before{border-top-color:${activeProcessControlTheme.hover.completeStage.selected.background};border-bottom-color:${activeProcessControlTheme.hover.completeStage.selected.background}}`
        +
        `.processControlContainer .processStageContainer.completedStage:focus .processStageTailContainer div.stageContentArea .stageContent span.stageNameContent {color:${activeProcessControlTheme.completeStage.selected.foreground}}.processControlContainer .processStageContainer.completedStage:focus .processStageTailContainer:hover div.stageContentArea .stageContent span.stageNameContent {color:${activeProcessControlTheme.hover.completeStage.selected.foreground}}`
        +
        "div.stageLabelMask{visibility: hidden !important}";
        break;
    case 2:
    case 3:
        processControlOverrideStyle.innerHTML = `.processHeaderContainer .processStageContainer.unselectedStage{background-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage .afterProcessStage{border-left-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage .beforeProcessStage{border-top-color:${activeProcessControlTheme.incompleteStage.normal.background};border-bottom-color:${activeProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage .processStageName{color${activeProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage .stageIconHolder span{color:${activeProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage .stageTracker span{color:${activeProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.selectedStage{background-color:${activeProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage .afterProcessStage{border-left-color: ${activeProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage .beforeProcessStage{border-top-color:${activeProcessControlTheme.incompleteStage.selected.background};border-bottom-color:${activeProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage .processStageName{color:${activeProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage .stageIconHolder span{color:${activeProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage .stageTracker span{color:${activeProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage{background-color:${activeProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage .afterProcessStage{border-left-color:${activeProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage .beforeProcessStage{border-top-color:${activeProcessControlTheme.completeStage.normal.background};border-bottom-color:${activeProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage .processStageName{color:${activeProcessControlTheme.completeStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage .stageIconHolder span{color:${activeProcessControlTheme.completeStage.normal.foreground}}.processHeaderContainer .processStageContainer.selectedStage.completedStage{background-color:${activeProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage .afterProcessStage{border-left-color:${activeProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage .beforeProcessStage{border-top-color:${activeProcessControlTheme.completeStage.selected.background};border-bottom-color:${activeProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage .processStageName{color:${activeProcessControlTheme.completeStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage.completedStage .stageIconHolder span{color:${activeProcessControlTheme.completeStage.selected.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage{background-color:${abandonedProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage .afterProcessStage{border-left-color:${abandonedProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage .beforeProcessStage{border-top-color:${abandonedProcessControlTheme.incompleteStage.normal.background};border-bottom-color:${abandonedProcessControlTheme.incompleteStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage .processStageName{color:${abandonedProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage .stageIconHolder span{color:${abandonedProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.abortedStage .stageTracker span{color:${abandonedProcessControlTheme.incompleteStage.normal.foreground}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage{background-color:${abandonedProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage .afterProcessStage{border-left-color:${abandonedProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage .beforeProcessStage{border-top-color:${abandonedProcessControlTheme.incompleteStage.selected.background};border-bottom-color:${abandonedProcessControlTheme.incompleteStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage .processStageName{color:${abandonedProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage .stageIconHolder span{color:${abandonedProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage.abortedStage .stageTracker span{color:${abandonedProcessControlTheme.incompleteStage.selected.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage{background-color:${abandonedProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage .afterProcessStage{border-left-color:${abandonedProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage .beforeProcessStage{border-top-color:${abandonedProcessControlTheme.completeStage.normal.background};border-bottom-color:${abandonedProcessControlTheme.completeStage.normal.background}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage .processStageName{color:${abandonedProcessControlTheme.completeStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage .stageIconHolder span{color:${abandonedProcessControlTheme.completeStage.normal.foreground}}.processHeaderContainer .processStageContainer.unselectedStage.completedStage.abortedStage .stageTracker span{color:${abandonedProcessControlTheme.completeStage.normal.foreground}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage{background-color:${abandonedProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage .afterProcessStage{border-left-color:${abandonedProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage .beforeProcessStage{border-top-color:${abandonedProcessControlTheme.completeStage.selected.background};border-bottom-color:${abandonedProcessControlTheme.completeStage.selected.background}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage .processStageName{color:${abandonedProcessControlTheme.completeStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage .stageIconHolder span{color:${abandonedProcessControlTheme.completeStage.selected.foreground}}.processHeaderContainer .processStageContainer.selectedStage.completedStage.abortedStage .stageTracker span{color:${abandonedProcessControlTheme.completeStage.selected.foreground}}`;
        break;
    default:
        processControlOverrideStyle.innerHTML = "";
}

window.parent.document.body.appendChild(processControlOverrideStyle);
}