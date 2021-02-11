import java.util.Scanner;

public class Exerc11 {
    /* Crie um programa em Java que, utilizando a classe Scanner, pergunte ao usuário sua data de 
    nascimento e calcule a sua idade. Se o usuário tiver 18 anos ou mais, escreva na tela: você é 
    maior de idade, mas caso tenha menos de 18 anos, escreva: você é menor de idade. */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Em qual ano você nasceu?");
        int idade = sc.nextInt();
        String nascimento = (2021 - idade < 18 ? "Voce eh menor de idade" : "Voce eh maior de idade");
        System.out.print(nascimento);
    }
}
