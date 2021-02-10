import java.util.Locale;
public class Exerc5 {
    /* Crie um programa em Java que, ao executar, escreva o idioma do sistema. */
    public static void main(String[] args) {
        String teste = Locale.getDefault().getLanguage();
        System.out.print("O idioma do sistema é: " + teste);
    }    
}
