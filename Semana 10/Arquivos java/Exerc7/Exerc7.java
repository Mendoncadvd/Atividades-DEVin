import java.util.Scanner;
public class Exerc7 {
    /* Crie um programa em Java que, utilizando a classe Scanner, pergunte ao usuário seu sobrenome, 
    depois seu nome, e então escreva na tela, em uma única string, o nome completo do usuário. */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Qual o seu nome?");
        String nome = sc.nextLine();
        System.out.printf("O seu nome eh: " + nome);
    }    
}
