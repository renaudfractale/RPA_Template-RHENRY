var data={
     "Framework/01-InitAllSettings.xaml": {
          "args": {
               "in": {
                    "in_ConfigFile": "String",
                    "in_Env": "String"
               },
               "out": {
                    "out_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Framework/Lib/ReadSheetExcelSettings.xaml": 2,
               "Framework/Lib/ReadSheetExcelAssets.xaml": 2
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 4,
               "sap:WorkflowViewStateService.ViewState": 7,
               "b:LogG_Trace": 1,
               "Assign": 3,
               "Assign.To": 3,
               "Assign.Value": 3,
               "ui:InvokeWorkflowFile": 4,
               "ui:InvokeWorkflowFile.Arguments": 4,
               "If": 1,
               "If.Then": 1,
               "Sequence.Variables": 2,
               "Variable": 2,
               "ui:GetRobotAsset": 1,
               "ui:GetRobotAsset.Value": 1,
               "If.Else": 1,
               "ui:ForEach": 1,
               "ui:ForEach.Body": 1,
               "ActivityAction": 2,
               "ActivityAction.Argument": 2,
               "DelegateInArgument": 2,
               "TryCatch": 1,
               "TryCatch.Try": 1,
               "TryCatch.Catches": 1,
               "Catch": 1,
               "Rethrow": 1
          }
     },
     "Framework/GetTransactionData.xaml": {
          "args": {
               "in": {
                    "in_TransactionNumber": "Int32",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {
                    "out_TransactionItem": "QueueItem"
               },
               "inout": {
                    "io_dt_TransactionData": "DataTable"
               }
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 2,
               "sap:WorkflowViewStateService.ViewState": 5,
               "b:LogG_Info": 1,
               "ui:LogMessage": 1,
               "ui:RetryScope": 1,
               "ui:RetryScope.ActivityBody": 1,
               "ActivityAction": 2,
               "TryCatch": 1,
               "TryCatch.Try": 1,
               "ui:GetQueueItem": 1,
               "TryCatch.Catches": 1,
               "Catch": 1,
               "ActivityAction.Argument": 1,
               "DelegateInArgument": 1,
               "b:LogG_Warn": 1,
               "Rethrow": 1,
               "ui:RetryScope.Condition": 1,
               "ActivityFunc": 1
          }
     },
     "Framework/Lib/GetAssetDynamique.xaml": {
          "args": {
               "in": {
                    "in_NameAsset": "String",
                    "in_TypeAsset": "String",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {
                    "out_Value": "Object"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 7,
               "Sequence.Variables": 5,
               "Variable": 8,
               "sap:WorkflowViewStateService.ViewState": 9,
               "Assign": 9,
               "Assign.To": 9,
               "Assign.Value": 9,
               "AddToCollection": 2,
               "Literal": 1,
               "ui:ForEach": 2,
               "ui:ForEach.Body": 2,
               "ActivityAction": 3,
               "ActivityAction.Argument": 3,
               "DelegateInArgument": 3,
               "If": 1,
               "If.Then": 1,
               "If.Else": 1,
               "b:LogG_Info": 1,
               "TryCatch": 1,
               "TryCatch.Try": 1,
               "Switch": 1,
               "ui:GetRobotAsset": 3,
               "ui:GetRobotAsset.Value": 3,
               "ui:GetRobotCredential": 2,
               "TryCatch.Catches": 1,
               "Catch": 1
          }
     },
     "Framework/Lib/ReadSheetExcelAssets.xaml": {
          "args": {
               "in": {
                    "in_ConfigFile": "String",
                    "in_SheetName": "String",
                    "in_IsLogAdvanced": "Boolean"
               },
               "out": {},
               "inout": {
                    "io_Config": "Dictionary(String, Dictionary(String, Object))"
               }
          },
          "InvokeWorkflowFile": {
               "Framework/Lib/SetConfigFromAsset.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "Sequence.Variables": 1,
               "Variable": 1,
               "sap:WorkflowViewStateService.ViewState": 3,
               "If": 4,
               "If.Then": 4,
               "b:LogG_Info": 2,
               "If.Else": 3,
               "ui:LogMessage": 3,
               "ui:ReadRange": 1,
               "ui:ForEachRow": 1,
               "ui:ForEachRow.Body": 1,
               "ActivityAction": 2,
               "ActivityAction.Argument": 2,
               "DelegateInArgument": 2,
               "TryCatch": 1,
               "TryCatch.Try": 1,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "TryCatch.Catches": 1,
               "Catch": 1,
               "b:LogG_Error": 1
          }
     },
     "Framework/Lib/ReadSheetExcelSettings.xaml": {
          "args": {
               "in": {
                    "in_SheetName": "String",
                    "in_ConfigFile": "String",
                    "in_IsLogAdvanced": "Boolean"
               },
               "out": {},
               "inout": {
                    "io_Config": "Dictionary(String, Dictionary(String, Object))"
               }
          },
          "InvokeWorkflowFile": {
               "Framework/Lib/SetConfigFromExcel.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "Sequence.Variables": 1,
               "Variable": 1,
               "sap:WorkflowViewStateService.ViewState": 2,
               "If": 3,
               "If.Then": 3,
               "b:LogG_Info": 2,
               "If.Else": 2,
               "ui:LogMessage": 2,
               "ui:ReadRange": 1,
               "ui:ForEachRow": 1,
               "ui:ForEachRow.Body": 1,
               "ActivityAction": 1,
               "ActivityAction.Argument": 1,
               "DelegateInArgument": 1,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1
          }
     },
     "Framework/Lib/SetConfigFromAsset.xaml": {
          "args": {
               "in": {
                    "in_Name": "String",
                    "in_Rubrique": "String",
                    "in_Asset": "String",
                    "in_Type": "String",
                    "in_OrchestratorAssetFolder": "String",
                    "in_IsPatern": "String"
               },
               "out": {},
               "inout": {
                    "io_Config": "Dictionary(String, Dictionary(String, Object))"
               }
          },
          "InvokeWorkflowFile": {
               "Framework/Lib/GetAssetDynamique.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 11,
               "sap:WorkflowViewStateService.ViewState": 12,
               "If": 6,
               "If.Then": 6,
               "Sequence.Variables": 3,
               "Variable": 13,
               "ui:MultipleAssign": 1,
               "ui:MultipleAssign.AssignOperations": 1,
               "ui:AssignOperation": 6,
               "ui:AssignOperation.To": 6,
               "ui:AssignOperation.Value": 6,
               "ui:ForEach": 2,
               "ui:ForEach.Body": 2,
               "ActivityAction": 2,
               "ActivityAction.Argument": 2,
               "DelegateInArgument": 2,
               "Assign": 9,
               "Assign.To": 9,
               "Assign.Value": 9,
               "If.Else": 6,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "Switch": 1,
               "ui:GetRobotAsset": 3,
               "ui:GetRobotAsset.Value": 3,
               "ui:GetRobotCredential": 2,
               "Throw": 1,
               "ui:LogMessage": 1,
               "b:LogG_Trace": 1
          }
     },
     "Framework/Lib/SetConfigFromExcel.xaml": {
          "args": {
               "in": {
                    "in_Rubrique": "String",
                    "in_Name": "String",
                    "in_Value": "String",
                    "in_IsPaterne": "String",
                    "in_IsLogAdvanced": "Boolean"
               },
               "out": {},
               "inout": {
                    "io_Config": "Dictionary(String, Dictionary(String, Object))"
               }
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 7,
               "sap:WorkflowViewStateService.ViewState": 7,
               "If": 6,
               "If.Then": 6,
               "Sequence.Variables": 1,
               "Variable": 4,
               "ui:MultipleAssign": 1,
               "ui:MultipleAssign.AssignOperations": 1,
               "ui:AssignOperation": 4,
               "ui:AssignOperation.To": 4,
               "ui:AssignOperation.Value": 4,
               "ui:ForEach": 1,
               "ui:ForEach.Body": 1,
               "ActivityAction": 1,
               "ActivityAction.Argument": 1,
               "DelegateInArgument": 1,
               "Assign": 3,
               "Assign.To": 3,
               "Assign.Value": 3,
               "If.Else": 6,
               "b:LogG_Warn": 1,
               "ui:LogMessage": 2
          }
     },
     "Framework/ReacapAll.xaml": {
          "args": {
               "in": {
                    "in_NoSessions": "String",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Orchestrateur/NoDeSession/Libs/GetInfoOfSession.xaml": 1,
               "Librairy/Email/SendEmailBySMTP.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 3,
               "Sequence.Variables": 1,
               "Variable": 8,
               "sap:WorkflowViewStateService.ViewState": 3,
               "b:LogG_Info": 10,
               "ui:MultipleAssign": 2,
               "ui:MultipleAssign.AssignOperations": 2,
               "ui:AssignOperation": 2,
               "ui:AssignOperation.To": 2,
               "ui:AssignOperation.Value": 2,
               "If": 3,
               "If.Then": 3,
               "ui:CreateDirectory": 1,
               "If.Else": 2,
               "ui:InvokeWorkflowFile": 2,
               "ui:InvokeWorkflowFile.Arguments": 2,
               "ui:InvokeCode": 1,
               "ui:InvokeCode.Arguments": 1,
               "ui:AddDataRow": 1,
               "ui:ForEach": 1,
               "ui:ForEach.Body": 1,
               "ActivityAction": 1,
               "ActivityAction.Argument": 1,
               "DelegateInArgument": 1,
               "Assign": 2,
               "Assign.To": 2,
               "Assign.Value": 2,
               "umab:CreateHtmlContent": 1,
               "umab:CreateHtmlContent.HtmlContentArg": 1,
               "umabh:HtmlContentArgument": 1,
               "umabh:HtmlContentArgument.RuntimeImages": 1,
               "umabh:HtmlContentArgument.ValueMappings": 1,
               "umabh:HtmlTextValueMapping": 7,
               "umabh:HtmlTableValueMapping": 1,
               "AddToCollection": 1,
               "ui:LogMessage": 9
          }
     },
     "Framework/RetryCurrentTransaction.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_SystemException": "Exception",
                    "in_QueueRetry": "Boolean"
               },
               "out": {},
               "inout": {
                    "io_RetryNumber": "Int32",
                    "io_TransactionNumber": "Int32"
               }
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Flowchart": 1,
               "sap:WorkflowViewStateService.ViewState": 15,
               "av:Point": 12,
               "av:Size": 12,
               "av:PointCollection": 14,
               "Flowchart.StartNode": 1,
               "FlowDecision": 3,
               "FlowDecision.Condition": 2,
               "FlowDecision.True": 3,
               "FlowStep": 8,
               "b:LogG_Error": 2,
               "FlowStep.Next": 4,
               "Assign": 5,
               "Assign.To": 5,
               "Assign.Value": 5,
               "FlowDecision.False": 3,
               "b:LogG_Warn": 1
          }
     },
     "Framework/SetTransactionStatus.xaml": {
          "args": {
               "in": {
                    "in_BusinessException": "BusinessRuleException",
                    "in_TransactionField1": "String",
                    "in_TransactionField2": "String",
                    "in_TransactionID": "String",
                    "in_SystemException": "Exception",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_TransactionItem": "QueueItem",
                    "in_DicoAnalyse": "Dictionary(String, String)",
                    "in_DicoOutput": "Dictionary(String, String)"
               },
               "out": {},
               "inout": {
                    "io_RetryNumber": "Int32",
                    "io_TransactionNumber": "Int32",
                    "io_ConsecutiveSystemExceptions": "Int32"
               }
          },
          "InvokeWorkflowFile": {
               "Implementation/05_SetTransactionItem/SetTranscationItemWithAnalyse.xaml": 1,
               "Framework/TakeScreenshot.xaml": 1,
               "Framework/RetryCurrentTransaction.xaml": 1,
               "Implementation/00-Framework/CloseAllApplications.xaml": 1,
               "Implementation/00-Framework/KillAllProcesses.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Flowchart": 1,
               "sap:WorkflowViewStateService.ViewState": 31,
               "av:Point": 7,
               "av:Size": 7,
               "av:PointCollection": 7,
               "Flowchart.StartNode": 1,
               "FlowDecision": 2,
               "FlowDecision.True": 2,
               "FlowStep": 4,
               "Sequence": 11,
               "If": 3,
               "If.Then": 3,
               "ui:RetryScope": 3,
               "ui:RetryScope.ActivityBody": 3,
               "ActivityAction": 9,
               "TryCatch": 6,
               "TryCatch.Try": 6,
               "ui:InvokeWorkflowFile": 5,
               "ui:InvokeWorkflowFile.Arguments": 5,
               "TryCatch.Catches": 6,
               "Catch": 6,
               "ActivityAction.Argument": 6,
               "DelegateInArgument": 6,
               "ui:LogMessage": 5,
               "Rethrow": 3,
               "ui:RetryScope.Condition": 3,
               "ActivityFunc": 3,
               "ui:AddLogFields": 3,
               "ui:AddLogFields.Fields": 3,
               "ui:RemoveLogFields": 3,
               "ui:RemoveLogFields.Fields": 3,
               "FlowStep.Next": 2,
               "Assign": 6,
               "Assign.To": 6,
               "Assign.Value": 6,
               "FlowDecision.False": 2,
               "ui:SetTransactionStatus": 2,
               "ui:SetTransactionStatus.Analytics": 2,
               "ui:SetTransactionStatus.Output": 2,
               "Sequence.Variables": 1,
               "Variable": 2,
               "b:LogG_Info": 1,
               "b:LogG_Warn": 3
          }
     },
     "Framework/TakeScreenshot.xaml": {
          "args": {
               "in": {
                    "in_Folder": "String"
               },
               "out": {
                    "io_FilePath": "String"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "Sequence.Variables": 1,
               "Variable": 2,
               "sap:WorkflowViewStateService.ViewState": 3,
               "ui:TakeScreenshot": 1,
               "ui:TakeScreenshot.Target": 1,
               "ui:Target": 1,
               "ui:Target.TimeoutMS": 1,
               "Assign": 2,
               "Assign.To": 2,
               "Assign.Value": 2,
               "If": 1,
               "If.Then": 1,
               "ui:CreateDirectory": 1,
               "ui:SaveImage": 1,
               "ui:LogMessage": 1
          }
     },
     "Implementation/00-Framework/CloseAllApplications.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 2,
               "sap:WorkflowViewStateService.ViewState": 2,
               "b:LogG_Trace": 2,
               "ui:BrowserScope": 1,
               "ui:BrowserScope.Body": 1,
               "ActivityAction": 1,
               "ActivityAction.Argument": 1,
               "DelegateInArgument": 1,
               "ui:CloseTab": 1,
               "ui:CloseApplication": 1,
               "ui:CloseApplication.Target": 1,
               "ui:Target": 1,
               "ui:Target.WaitForReady": 1
          }
     },
     "Implementation/00-Framework/KillAllProcesses.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1,
               "b:LogG_Trace": 2,
               "ui:KillProcess": 1
          }
     },
     "Implementation/01_RunStart/RunStart.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1
          }
     },
     "Implementation/02_Dispatcher/DispatcherRoot.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {
                    "out_NoSession": "String"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Implementation/02_Dispatcher/DispatcherUsed.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1
          }
     },
     "Implementation/02_Dispatcher/DispatcherUsed.xaml": {
          "args": {
               "in": {
                    "in_RAZ": "String",
                    "in_QueueName": "String",
                    "in_QueuePath": "String",
                    "in_SiteWeb": "String",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {
                    "out_NoSession": "String"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Orchestrateur/NoDeSession/Libs/GetLastSession.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 7,
               "Sequence.Variables": 2,
               "Variable": 6,
               "sap:WorkflowViewStateService.ViewState": 10,
               "If": 2,
               "If.Then": 2,
               "ui:InterruptibleDoWhile": 1,
               "ui:InterruptibleDoWhile.Body": 1,
               "ui:GetQueueItem": 1,
               "TryCatch": 1,
               "TryCatch.Try": 1,
               "b:LogG_Warn": 2,
               "ui:DeleteQueueItems": 1,
               "TryCatch.Catches": 1,
               "Catch": 1,
               "ActivityAction": 3,
               "ActivityAction.Argument": 3,
               "DelegateInArgument": 3,
               "If.Else": 2,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "Assign": 4,
               "Assign.To": 4,
               "Assign.Value": 4,
               "ui:OpenBrowser": 1,
               "ui:OpenBrowser.Body": 1,
               "ui:ExtractData": 1,
               "ui:ExtractData.Target": 1,
               "ui:Target": 1,
               "ui:CloseTab": 1,
               "ui:ForEachRow": 1,
               "ui:ForEachRow.Body": 1,
               "b:LogG_Info": 2,
               "ui:AddQueueItem": 1,
               "ui:AddQueueItem.ItemInformation": 1
          }
     },
     "Implementation/03_InitApps/InitAllApplications.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1,
               "b:LogG_Trace": 1
          }
     },
     "Implementation/04_Process/Process.xaml": {
          "args": {
               "in": {
                    "in_TransactionItem": "QueueItem",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {
                    "out_DicoAnalyse": "Dictionary(String, String)",
                    "out_DicoOutput": "Dictionary(String, String)"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Errors/Monkey.xaml": 2,
               "Implementation/04_Process/Workflow_Main.xaml": 1,
               "Librairy/Errors/SendEmailError.xaml": 2
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 9,
               "Sequence.Variables": 3,
               "Variable": 9,
               "sap:WorkflowViewStateService.ViewState": 20,
               "Assign": 13,
               "Assign.To": 13,
               "Assign.Value": 13,
               "b:LogG_Info": 12,
               "ui:MultipleAssign": 2,
               "ui:MultipleAssign.AssignOperations": 2,
               "ui:AssignOperation": 6,
               "ui:AssignOperation.To": 6,
               "ui:AssignOperation.Value": 6,
               "If": 7,
               "If.Then": 7,
               "ui:CreateDirectory": 3,
               "ui:Delete": 1,
               "TryCatch": 2,
               "TryCatch.Try": 2,
               "ui:InvokeWorkflowFile": 5,
               "ui:InvokeWorkflowFile.Arguments": 5,
               "TryCatch.Catches": 2,
               "Catch": 3,
               "ActivityAction": 3,
               "ActivityAction.Argument": 3,
               "DelegateInArgument": 3,
               "b:LogG_Error": 2,
               "ui:CopyFolderX": 1,
               "ui:MoveFolderX": 1,
               "Throw": 2
          }
     },
     "Implementation/04_Process/Workflow_Main.xaml": {
          "args": {
               "in": {
                    "in_Nom": "String",
                    "in_SiteWeb": "String",
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_FolderWotking": "String"
               },
               "out": {},
               "inout": {
                    "io_DicoAnalyse": "Dictionary(String, String)"
               }
          },
          "InvokeWorkflowFile": {
               "Implementation/00-Framework/CloseAllApplications.xaml": 1,
               "Implementation/00-Framework/KillAllProcesses.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Flowchart": 1,
               "Flowchart.Variables": 1,
               "Variable": 8,
               "sap:WorkflowViewStateService.ViewState": 25,
               "av:Point": 14,
               "av:Size": 14,
               "av:PointCollection": 14,
               "Flowchart.StartNode": 1,
               "FlowStep": 12,
               "ui:OpenBrowser": 1,
               "ui:OpenBrowser.Body": 1,
               "ActivityAction": 3,
               "ActivityAction.Argument": 2,
               "DelegateInArgument": 2,
               "Sequence": 3,
               "ui:UiElementExists": 1,
               "ui:UiElementExists.Target": 1,
               "ui:Target": 3,
               "ui:Target.TimeoutMS": 3,
               "ui:Target.WaitForReady": 3,
               "FlowStep.Next": 10,
               "FlowDecision": 1,
               "FlowDecision.True": 1,
               "ui:BrowserScope": 1,
               "ui:BrowserScope.Body": 1,
               "Sequence.Variables": 1,
               "ui:Click": 2,
               "ui:Click.CursorPosition": 2,
               "ui:CursorPosition": 2,
               "ui:CursorPosition.OffsetX": 2,
               "ui:CursorPosition.OffsetY": 2,
               "ui:Click.Target": 2,
               "ui:GetLastDownloadedFile": 1,
               "ui:GetLastDownloadedFile.Body": 1,
               "ui:MoveFile": 1,
               "ui:CloseTab": 1,
               "Assign": 6,
               "Assign.To": 6,
               "Assign.Value": 6,
               "FlowDecision.False": 1,
               "Throw": 1,
               "ui:InvokeWorkflowFile": 2,
               "ui:InvokeWorkflowFile.Arguments": 2,
               "ui:GetEnvironmentFolder": 1
          }
     },
     "Implementation/05_SetTransactionItem/SetTranscationItemWithAnalyse.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_TransactionItem": "QueueItem",
                    "in_DicoAnalyse": "Dictionary(String, String)",
                    "in_DicoOutput": "Dictionary(String, String)"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1,
               "ui:SetTransactionStatus": 1,
               "ui:SetTransactionStatus.Analytics": 1,
               "ui:SetTransactionStatus.Output": 1
          }
     },
     "Implementation/06_RunEnd/RunEnd.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1
          }
     },
     "Librairy/Email/SendEmailBySMTP.xaml": {
          "args": {
               "in": {
                    "in_To": "String",
                    "in_Cc": "String",
                    "in_Objet": "String",
                    "in_Body": "String",
                    "in_Port": "Int32",
                    "in_Serveur": "String",
                    "in_ListeFiles": "List(String)",
                    "in_Credential_Login": "String",
                    "in_EmailFrom": "String",
                    "in_NameFrom": "String",
                    "in_Credential_Pwd": "String"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "sap:WorkflowViewStateService.ViewState": 1,
               "ui:SendMail": 1,
               "ui:SendMail.Files": 1
          }
     },
     "Librairy/Errors/Monkey.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_StringChance": "String",
                    "in_Actived": "String",
                    "in_Exception": "Exception"
               },
               "out": {
                    "out_WithErrors": "Boolean"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 5,
               "Sequence.Variables": 3,
               "Variable": 6,
               "sap:WorkflowViewStateService.ViewState": 5,
               "Assign": 10,
               "Assign.To": 10,
               "Assign.Value": 10,
               "If": 4,
               "If.Then": 4,
               "ui:LogMessage": 2,
               "If.Else": 3,
               "Throw": 1
          }
     },
     "Librairy/Errors/SendEmailError.xaml": {
          "args": {
               "in": {
                    "in_Config": "Dictionary(String, Dictionary(String, Object))",
                    "in_SystemeException": "Exception",
                    "in_BusinessException": "BusinessRuleException"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Framework/TakeScreenshot.xaml": 1,
               "Librairy/Email/SendEmailBySMTP.xaml": 2
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 5,
               "Sequence.Variables": 3,
               "Variable": 6,
               "sap:WorkflowViewStateService.ViewState": 5,
               "ui:InvokeWorkflowFile": 3,
               "ui:InvokeWorkflowFile.Arguments": 3,
               "Assign": 3,
               "Assign.To": 3,
               "Assign.Value": 3,
               "AddToCollection": 1,
               "If": 2,
               "If.Then": 2,
               "umab:CreateHtmlContent": 2,
               "umab:CreateHtmlContent.HtmlContentArg": 2,
               "umabh:HtmlContentArgument": 2,
               "umabh:HtmlContentArgument.RuntimeImages": 2,
               "umabh:HtmlContentArgument.ValueMappings": 2,
               "umabh:HtmlTextValueMapping": 17,
               "If.Else": 2
          }
     },
     "Librairy/Orchestrateur/NoDeSession/Libs/GetInfoOfQItems.xaml": {
          "args": {
               "in": {
                    "in_ClientId": "String",
                    "in_RefreshToken": "String",
                    "in_TenantName": "String",
                    "in_AccountLogicalName": "String",
                    "in_FolderOrchrestrator": "String",
                    "in_QueueName": "String"
               },
               "out": {
                    "out_JSON_ITEMS": "JObject"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {},
          "Activitys": {
               "Activity": 1,
               "Sequence": 6,
               "Sequence.Variables": 4,
               "Variable": 9,
               "sap:WorkflowViewStateService.ViewState": 7,
               "ui:LogMessage": 8,
               "ui:HttpClient": 3,
               "ui:HttpClient.Attachments": 3,
               "ui:HttpClient.Cookies": 3,
               "ui:HttpClient.Headers": 3,
               "ui:HttpClient.Parameters": 3,
               "ui:HttpClient.UrlSegments": 3,
               "ui:DeserializeJson": 3,
               "Assign": 7,
               "Assign.To": 7,
               "Assign.Value": 7,
               "Literal": 1,
               "ui:InterruptibleDoWhile": 1,
               "ui:InterruptibleDoWhile.Body": 1,
               "If": 3,
               "If.Then": 3,
               "ui:Break": 1,
               "If.Else": 2
          }
     },
     "Librairy/Orchestrateur/NoDeSession/Libs/GetInfoOfSession.xaml": {
          "args": {
               "in": {
                    "in_FolderOrchrestrator": "String",
                    "in_QueueName": "String",
                    "in_NoSession": "String",
                    "in_FolderRecap": "String"
               },
               "out": {
                    "out_PathExcel": "String",
                    "out_DT": "DataTable",
                    "out_Rouges": "String",
                    "out_Verts": "String",
                    "out_Oranges": "String"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Orchestrateur/NoDeSession/Libs/GetInfoOfQItems.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 21,
               "Sequence.Variables": 12,
               "Variable": 38,
               "sap:WorkflowViewStateService.ViewState": 28,
               "ui:LogMessage": 2,
               "ui:GetRobotCredential": 4,
               "Assign": 33,
               "Assign.To": 33,
               "Assign.Value": 33,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "ui:BuildDataTable": 2,
               "If": 14,
               "If.Then": 14,
               "ui:InterruptibleDoWhile": 1,
               "ui:InterruptibleDoWhile.Body": 1,
               "ui:Break": 1,
               "ui:AddDataRow": 2,
               "ui:InterruptibleDoWhile.Condition": 1,
               "Literal": 2,
               "ui:ForEachRow": 3,
               "ui:ForEachRow.Body": 3,
               "ActivityAction": 9,
               "ActivityAction.Argument": 9,
               "DelegateInArgument": 9,
               "ui:ForEach": 6,
               "ui:ForEach.Body": 6,
               "ui:Continue": 1,
               "ui:DeserializeJson": 2,
               "ui:AddDataColumn": 1,
               "ui:MultipleAssign": 6,
               "ui:MultipleAssign.AssignOperations": 6,
               "ui:AssignOperation": 11,
               "ui:AssignOperation.To": 11,
               "ui:AssignOperation.Value": 11,
               "If.Else": 1,
               "ui:WriteRange": 1
          }
     },
     "Librairy/Orchestrateur/NoDeSession/Libs/GetLastSession.xaml": {
          "args": {
               "in": {
                    "in_FolderOrchrestrator": "String",
                    "in_QueueName": "String"
               },
               "out": {
                    "out_LastID": "Int32"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Orchestrateur/NoDeSession/Libs/GetInfoOfQItems.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 6,
               "Sequence.Variables": 5,
               "Variable": 9,
               "sap:WorkflowViewStateService.ViewState": 6,
               "ui:LogMessage": 5,
               "ui:GetRobotCredential": 4,
               "Assign": 5,
               "Assign.To": 5,
               "Assign.Value": 5,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "If": 1,
               "If.Then": 1,
               "ui:InvokeCode": 1,
               "ui:InvokeCode.Arguments": 1,
               "If.Else": 1
          }
     },
     "Main_REFC.xaml": {
          "args": {
               "in": {
                    "in_Env": "String"
               },
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Framework/GetTransactionData.xaml": 1,
               "Librairy/Errors/SendEmailError.xaml": 4,
               "Implementation/04_Process/Process.xaml": 1,
               "Framework/SetTransactionStatus.xaml": 3,
               "Implementation/00-Framework/CloseAllApplications.xaml": 2,
               "Implementation/00-Framework/KillAllProcesses.xaml": 2,
               "Implementation/03_InitApps/InitAllApplications.xaml": 1,
               "Implementation/06_RunEnd/RunEnd.xaml": 1,
               "Framework/ReacapAll.xaml": 1,
               "Framework/01-InitAllSettings.xaml": 1,
               "Implementation/01_RunStart/RunStart.xaml": 1,
               "Implementation/02_Dispatcher/DispatcherRoot.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 16,
               "sap:WorkflowViewStateService.ViewState": 57,
               "StateMachine": 1,
               "av:Point": 7,
               "av:PointCollection": 12,
               "State": 6,
               "State.Entry": 6,
               "Sequence.Variables": 2,
               "Variable": 16,
               "ui:ShouldStop": 1,
               "If": 5,
               "If.Then": 5,
               "ui:LogMessage": 7,
               "Assign": 13,
               "Assign.To": 13,
               "Assign.Value": 13,
               "If.Else": 3,
               "TryCatch": 11,
               "TryCatch.Try": 11,
               "ui:InvokeWorkflowFile": 19,
               "ui:InvokeWorkflowFile.Arguments": 19,
               "TryCatch.Catches": 11,
               "Catch": 12,
               "ActivityAction": 12,
               "ActivityAction.Argument": 12,
               "DelegateInArgument": 12,
               "b:LogG_Fatal": 1,
               "av:Size": 6,
               "State.Transitions": 5,
               "Transition": 11,
               "Transition.To": 11,
               "Transition.Condition": 11,
               "Throw": 1,
               "b:LogG_Error": 5,
               "TryCatch.Finally": 1,
               "TerminateWorkflow": 1,
               "Transition.Action": 6,
               "b:LogG_Info": 1,
               "ui:Comment": 1,
               "StateMachine.Variables": 1
          }
     },
     "Tests/S??quence-Etape1.xaml": {
          "args": {
               "in": {},
               "out": {
                    "Config": "Dictionary(String, Dictionary(String, Object))"
               },
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Framework/01-InitAllSettings.xaml": 1,
               "Implementation/01_RunStart/RunStart.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 2,
               "sap:WorkflowViewStateService.ViewState": 2,
               "Sequence.Variables": 1,
               "Variable": 1,
               "Assign": 1,
               "Assign.To": 1,
               "Assign.Value": 1,
               "ui:InvokeWorkflowFile": 2,
               "ui:InvokeWorkflowFile.Arguments": 2,
               "ui:LogMessage": 1
          }
     },
     "Tests/Test-EmailSMTP.xaml": {
          "args": {
               "in": {},
               "out": {},
               "inout": {}
          },
          "InvokeWorkflowFile": {
               "Librairy/Email/SendEmailBySMTP.xaml": 1
          },
          "Activitys": {
               "Activity": 1,
               "Sequence": 1,
               "Sequence.Variables": 1,
               "Variable": 7,
               "sap:WorkflowViewStateService.ViewState": 1,
               "Assign": 1,
               "Assign.To": 1,
               "Assign.Value": 1,
               "ui:GetRobotAsset": 4,
               "ui:GetRobotAsset.Value": 4,
               "ui:GetRobotCredential": 1,
               "ui:InvokeWorkflowFile": 1,
               "ui:InvokeWorkflowFile.Arguments": 1,
               "Literal": 3
          }
     }
}