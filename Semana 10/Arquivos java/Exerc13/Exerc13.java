import java.util.Scanner;

public class Exerc13 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite as notas do aluno");

        System.out.println("Digite a primeira nota ");
        float nota1 = sc.nextFloat();
        System.out.println("Digite a segunda nota ");
        float nota2 = sc.nextFloat();
        System.out.println("Digite a terceira nota ");
        float nota3 = sc.nextFloat();

        float resultado = (nota1 + nota2 + nota3) / 3;

        System.out.printf("Sua media final eh: %.2f", resultado);

        sc.close();
    }
}
