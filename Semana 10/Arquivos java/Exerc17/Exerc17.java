import java.util.Scanner;

public class Exerc17 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int val1, val2 = 1;
        System.out.println("Digite um valor de 0 a 10");
        val1 = sc.nextInt();

        if(val1 > 1) {
            for (int i = 1; i <= val1; i++) {
                val2 *= i;
            }
            System.out.println("O fatorial do número " + val1 + " eh: " + val2);
        } else {
            System.out.print("1");
        }
        sc.close();
    }
}
