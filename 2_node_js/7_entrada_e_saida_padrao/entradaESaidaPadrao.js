const anonimo = process.argv.indexOf("-a") != -1;


if(anonimo){

    process.stdout.write("Ola anonimo\n");
    process.exit();

}