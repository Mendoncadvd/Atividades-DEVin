import java.util.Random;
import java.util.Scanner;

public class Exerc10 {
    /*
     * Crie um programa em Java que, utilizando a classe Scanner, pergunte ao
     * usuário a seguinte frase: Adivinhe qual número de 1 a 5 eu estou pensando. Na
     * sequência, o usuário deve inserir um número entre 1 e 5, e o seu programa
     * deve gerar aleatoriamente outro número, também de 1 a 5. Se o número gerado
     * for o mesmo que o usuário inseriu, o programa deve escrever na tela: Você
     * acertou!, mas se for diferente, o programa deve escrever: Você errou, o
     * número correto era X, onde X é o número gerado aleatoriamente pelo programa.
     */
    public static void main(String[] args) {
        Random rand = new Random();
        int randomNum = rand.nextInt(6);

        Scanner sc = new Scanner(System.in);
        System.out.println("Digite um valor inteiro");
        int num = sc.nextInt();
        
        if (randomNum == num) {
            System.out.print("Voce acertou!");
        } else {
            System.out.print("Voce errou, o numero correto era " + randomNum + ", onde " +randomNum+ 
            " eh o numero gerado aleatoriamente");
        }
    }
}
