import java.util.Scanner;
public class Exerc14 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double valor1, valor2, resultado;
        System.out.println("Qual operação matemática deseja realizar?");
        String operacao = sc.nextLine();
            
            switch (operacao) {
                case "somar":
                    System.out.println("Digite o primeiro valor");
                    valor1 = sc.nextDouble();
                    System.out.println("Digite o segundo valor");
                    valor2 = sc.nextDouble();
                    resultado = valor1 + valor2;
                    System.out.printf("O resultado da soma eh: %.2f%n", resultado);
                    break;

                case "subtrair":
                    System.out.println("Digite o primeiro valor");
                    valor1 = sc.nextDouble();
                    System.out.println("Digite o segundo valor");
                    valor2 = sc.nextDouble();
                    resultado = valor1 - valor2;
                    System.out.printf("O resultado da subtracao eh: %.2f%n", resultado);
                    break;

                case "dividir":
                    System.out.println("Digite o primeiro valor");
                    valor1 = sc.nextDouble();
                    System.out.println("Digite o segundo valor");
                    valor2 = sc.nextDouble();
                    resultado = valor1 / valor2;
                    System.out.printf("O resultado da divisao eh: %.2f%n", resultado);
                    break;

                case "multiplicar":
                    System.out.println("Digite o primeiro valor");
                    valor1 = sc.nextDouble();
                    System.out.println("Digite o segundo valor");
                    valor2 = sc.nextDouble();
                    resultado = valor1 * valor2;
                    System.out.printf("O resultado da multiplicacao eh: %.2f%n", resultado);
                    break;

                default:
                    System.out.println("Digite uma operacao valida");
            }
        sc.close();
    }
}