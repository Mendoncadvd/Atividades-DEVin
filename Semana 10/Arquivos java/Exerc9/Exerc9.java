import java.util.Scanner;

public class Exerc9 {
    /*
     * Crie um programa em Java que, utilizando a classe Scanner, peça ao usuário
     * que digite um nome qualquer, e em seguida escreva na tela o tamanho de letras
     * que o nome possui.
     */
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o nome de uma cidade");
        String cidade = sc.nextLine();
        System.out.print("A cidade tem " + cidade.length() + " letras");

    }
}
