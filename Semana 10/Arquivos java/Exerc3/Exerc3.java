import java.util.Random;
public class Exerc3 {
    public static void main (String[] args) {
        //Crie um programa em Java que, ao executar, escreve na tela um número aleatório entre 0 e 1.
        Random num = new Random();
        double random = num.nextDouble();
        System.out.print(random);


    }
}
