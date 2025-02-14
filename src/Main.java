import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Integer quantidadeDePessoas = 15;

        ArrayList<Double> alturas = new ArrayList<Double>();
        ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
        Scanner sc = new Scanner(System.in);


        for (int i = 0; i < quantidadeDePessoas; i++) {
            System.out.println("Digite seu g�nero (M/F): ");
            String genero = sc.nextLine();
            System.out.println("G�nero: " + genero);
            System.out.println("Digite sua altura: ");
            Double altura = sc.nextDouble();
            sc.nextLine();
            System.out.println("Altura: " + altura);
            alturas.add(altura);
            Pessoa pessoa = new Pessoa();
            pessoa.setAltura(altura);
            pessoa.setGenero(genero);
            pessoas.add(pessoa);

        }
        sc.close();



        System.out.println("A maior altura �: " + Collections.max(alturas));
        System.out.println("A menor altura �: " + Collections.min(alturas));


        Double somaAlturasMasculinas = 0.0;
        Integer quantidadeHomens = 0;

        for(Pessoa pessoa : pessoas){
            if(pessoa.getGenero().equalsIgnoreCase("M")){
                Double altura = pessoa.getAltura();
                somaAlturasMasculinas += altura;
                 quantidadeHomens++;
            }
        }
        Double mediaAlturaMasculina = somaAlturasMasculinas / quantidadeHomens ;
        if (quantidadeHomens == 0){
            System.out.println("N�o h� homens na lista");
        } else {
            System.out.println("A m�dia das alturas masculinas � :" + mediaAlturaMasculina);
        }

        Integer quantidadeMulheres = 0;
        for(Pessoa pessoa : pessoas){
            if(pessoa.getGenero().equalsIgnoreCase("F")){
                quantidadeMulheres++;
            }
        }
        System.out.println("Quantidade de mulheres: " + quantidadeMulheres);
    }





}