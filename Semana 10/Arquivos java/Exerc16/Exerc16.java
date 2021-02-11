import java.util.Scanner;

public class Exerc16 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int val1, val2;
        String operation;

        System.out.println("Digite o primeiro valor");
        val1 = sc.nextInt();

        System.out.println("Digite o segundo valor");
        val2 = sc.nextInt();

        System.out.print("\n");
        System.out.println("Qual operação deseja fazer? PA ou PG?");
        operation = sc.nextLine();
        operation = sc.nextLine();
        System.out.print("");
        if (operation.equalsIgnoreCase("pa")) {
            System.out.println(val1);
            for (int i = 0; i < 9; i++) {
                val1 += val2;
                System.out.println(val1);
            }
        } if (operation.equalsIgnoreCase("pg")) {
            System.out.println(val1);
            for (int i = 0; i < 9; i++) {
                val1 *= val2;
                System.out.println(val1);
            }
        } else {
            System.out.print("Opcao invalida");
        }
        sc.close();
    }
}
