package com.company;
import com.company.G.G;

interface JImmyInterface {
    void ShowInfoTerminal();
}

interface JImmyInterface2 {
    void ShowInfoTerminal2();
}

class NormalClass {
    public void printMessage(){
        System.out.print("print from normalClass");
    }
}

 class Jimmy implements  JImmyInterface, JImmyInterface2 {
    private String name;

    public Jimmy(){
        /*  this function is a constructor. it doesn't return any typeData
            and any type of reference because is a constructor. it Should be the same
            name of the class
        */
        // NormalClass myObject = new NormalClass();
        // anonymous class example
        NormalClass myObject = new NormalClass(){
            public void printMessage2() {
                System.out.print("print from anonymous Class");
            }
        };

        myObject.printMessage();
        System.out.print("----- constructor --------");
    }

     public Jimmy(String name){
        /*  second constructor  */
         System.out.print("----- constructor "+ name +" --------");
         ShowInfoTerminal();
     }

     public void ShowInfoTerminal() {
         System.out.print("----- interface from constructor Jimmy Class --------");
     }
     public void ShowInfoTerminal2() {
         System.out.print("----- interface2 from constructor Jimmy Class --------");
     }

     public String jimmy_Method(String item){
        name = item;
        return  this.name + " - java ---<<<"+ G.itemStatic +">>>--- knowledge ";
    }
}
