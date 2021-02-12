import java.util.Scanner;

public class Exerc8 {
    /*
     * Crie um programa em Java que, utilizando a classe Scanner, peça ao usuário
     * que digite um número com 2 ou mais casas depois da vírgula, converta esse
     * número para um inteiro e escreva o resultado na tela.
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite um número com 2 ou mais casas depois da vírgula");
        float num = sc.nextFloat();
        int numero = (int) num;
        System.out.printf("O número que digitou é:" + numero);
    }
}
