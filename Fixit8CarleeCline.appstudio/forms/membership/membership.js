
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]


btnGo.onclick=function(){
  let memberName = inptMember.value
  for (i = 0; i < members.length; i++)
    if (members[i] == memberName) 
      ChangeForm(memberConfirm)
    else 
      members.push(memberName)
      ChangeForm(memberDeny)
      
}


