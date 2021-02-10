import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class Exerc4 {
/* Crie um programa em Java que, ao executar, verifique o horário atual e escreva 
para o usuário uma saudação, contendo o período e o horário. Por exemplo: Boa tarde, 
no momento são 15:08. */
    public static void main(String[] args) {
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("HH:mm:ss");
        LocalDateTime hora = LocalDateTime.now();
        String texto = "Boa tarde, no momento são ";
        System.out.print(texto + formato.format(hora));
    }
}
