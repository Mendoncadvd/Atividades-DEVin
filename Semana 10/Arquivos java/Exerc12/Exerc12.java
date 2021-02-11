import java.util.Scanner;

public class Exerc12 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite um valor inteiro");
        int num = sc.nextInt();
        
        String resultado = (num % 2 == 0 ? "O valor eh par" : "O valor eh impar");
        System.out.print(resultado);
        sc.close();
    }
}
