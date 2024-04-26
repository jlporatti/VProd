// Crear el Repositorio
Entrar al GIT BASH y hacer

cd e:/RepoGit                                                           // Direccionamos al directorio donde vamos a colocar el repositorio

pwd                                                                     // Verificamos que se haya cambiado el directorio

git config --global user.email "jlporatti@hotmail.com"                  // Definimos el mail de la cuenta de GitHub

git config --global user.name "jlporatti"                               // Definimos el usuario de la cuenta de Github

git config --global -e                                                  // Verificamos lo definido, y salimos con CONTROL C y :QA

git clone https://github.com/jlporatti/GrupoA1.git                     // Clonamos el Repositorio de GitHub

dir                                                                     // Verificamos la clonacion tiene que mostrar el repositorio

cd GrupoA1                                                             // Nos posicionamos en el directorio del repositorio clonado

git init                                                                // Inicializamos el Repositorio

Agregamos/Creamos información en el Directorio Local del Repositorio con cualquier herramienta

git status                                                              // Muestra el estado de la nueva información. Deben estar en Rojo

git add .                                                               // Agregamos todos los archivos modificados para actualizarse. 

git status                                                              // Muestra el estado de la nueva información. Deben estar en Verde

git commit -m "first commit"                                            // Confirmamos la actualización de los Archivos

git status                                                              // Muestra el estado de la nueva información. Luego del Commit

git branch --unset-upstream                                             // Porque no hay Branch definida

git push --set-upstream origin main                                     // Los subimos al repositorio online

git status                                                              // Muestra el estado de la nueva información. Luego del Push.

///-------------------------------------------------------------------------------------------------------------------------------------------///
// Aplicar Cambios del Dia a Dia Se puede usar la interfaz Grafica o Git Bash
Entrar al Git Bash y hacer:

cd e:/RepoGit/Grupo_A1                                                  // Direccionamos al directorio donde vamos a colocar el repositorio

pwd                                                                     // Verificamos que se haya cambiado el directorio

git status                                                              // Vemos los cambios pendientes

git add .                                                               // Agregamos todos los archivos modificados para actualizarse

git commit -m "Actualizacion 1"                                         // Confirmamos la actualización de los Archivos

git push                                                                // Los subimos al repositorio online

