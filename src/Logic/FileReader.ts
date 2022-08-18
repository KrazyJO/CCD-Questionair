import IFileReader from "../Interfaces/IFileReader";
import text from "../sample";

class FileReader implements IFileReader {
    readfile(): string[] {
        const lines = text.split("\n")
        return lines;
    }

}

export default FileReader;