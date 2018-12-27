/*
var user={
    name:'Pradeep',
    place:'bangalore',
    courses:['java','javascript','Angular','React'],
    getName:function(){
        return this.name;
    },

    setName:function(name){
        this.name = name;
    }
}

user.setName('Vikram');
user.name='Prakash';
console.log(user.getName());
*/

var user=function(){
        var name;
        var courses=[];
        var obj={
            getName:function(){
                return name;
            }(),
            setName:function(newName){
                name = newName;
            },
            getCourses:function(){
                return courses;
            }(),
            addCourse:function(courseName){
                courses.push(courseName);
            }
        }
        return obj;
    }();

    user.setName('Prakash');
    user.addCourse('Java');
    console.log(user.getCourses);

