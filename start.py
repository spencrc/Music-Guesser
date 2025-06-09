import subprocess
import os

def new_terminal(command):
    if os.name == 'nt': #Windows
        subprocess.Popen(["start", "cmd", "/k", command], shell=True)
    else:
        print("Sorry! Your operating system is not currently supported. Linux support will be added in the future!")

cmd1 = 'node ./backend/dist/server.js'
cmd2 = 'cd ./frontend && npm run dev'

new_terminal(cmd1)
new_terminal(cmd2)