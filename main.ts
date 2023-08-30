import * as readline from 'readline';

class Cyclotron {
    private static PARTICLE_CODES = {
        "e": "e",
        "p": "p",
        "n": "n"
    };

    private matrix_size: number;
    private cyclotron: string[][];

    constructor(matrix_size: number) {
        this.matrix_size = matrix_size;
        this.cyclotron = new Array<Array<string>>(matrix_size).fill([]).map(_ => new Array<string>(matrix_size).fill("1"));
    }

    private handle_electron(): void {
        const e: string = Cyclotron.PARTICLE_CODES["e"];

        for (let i = 0; i < this.matrix_size; i++) {
            this.cyclotron[0][i] = this.cyclotron[i][this.matrix_size - 1] = e;
        }
    }

    private handle_proton(): void {
        const p: string = Cyclotron.PARTICLE_CODES["p"];

        for (let i = 0; i < this.matrix_size; i++) {
            this.cyclotron[0][i] = this.cyclotron[i][0] = this.cyclotron[this.matrix_size - 1][i] = this.cyclotron[i][this.matrix_size - 1] = p;
        }

        this.cyclotron[this.matrix_size - 2][this.matrix_size - 2] = p;
        this.cyclotron[this.matrix_size - 1][this.matrix_size - 1] = "1";
    }

    private handle_neutron(): void {
        for (let i = 0; i < this.matrix_size; i++) {
            this.cyclotron[0][i] = Cyclotron.PARTICLE_CODES["n"];
        }
    }

    private circulate_particle(particle_type: string): void {
        if (particle_type === "e") {
            this.handle_electron();
        } else if (particle_type === "p") {
            this.handle_proton();
        } else if (particle_type === "n") {
            this.handle_neutron();
        }
    }

    private validate_matrix(): void {
        if (this.matrix_size < 4) {
            throw new Error("Min value to matrix must be 4");
        }
    }

    public accelerating(particle_type: string): string {
        this.validate_matrix();

        if (!Cyclotron.PARTICLE_CODES.hasOwnProperty(particle_type)) {
            throw new Error("Invalid particle type. Choose from: " + Object.keys(Cyclotron.PARTICLE_CODES).join(", "));
        }

        this.circulate_particle(particle_type);

        return "\n" +this.cyclotron.map(row => "[ " + row.join(", ") + " ]").join("\n") + "\n";
    }
}

function main(): void {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Type the matrix size to the cyclotron: ", (matrixSizeInput) => {
        const matrix_size: number = Number(matrixSizeInput);

        rl.question("Type the particle: ", (particleType) => {
            const cyclotron = new Cyclotron(matrix_size);
            const result = cyclotron.accelerating(particleType.toLowerCase());

            console.log(result);
            rl.close();
        });
    });
}


main()
