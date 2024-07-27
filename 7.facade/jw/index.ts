class VideoFile {
  get name() {
    return this._name;
  }
  constructor(private _name: string) {}

  save() {
    console.log(`Saving video file ${this.name}`);
  }
}

class OggCompressionCodec extends VideoFile {
  compress(videoFile: VideoFile) {
    console.log(`Compressing video file ${videoFile}`);
  }
}

class MPEG4CompressionCodec extends VideoFile {
  compress(videoFile: VideoFile) {
    console.log(`Compressing video file ${videoFile}`);
  }
}

class CodecFactory {
  static extract(file: VideoFile) {
    const name = file.name;
    if (name.endsWith(".mp4")) {
      return new MPEG4CompressionCodec("mp4");
    } else {
      return new OggCompressionCodec("ogg");
    }
  }
}

class BitrateReader {
  static read(file: VideoFile, codec: VideoFile) {
    return file;
  }

  static convert(buffer: VideoFile, codec: VideoFile) {
    return buffer;
  }
}

class AudioMixer {
  static fix(result: VideoFile) {
    return result;
  }
}

// 위에 엄청나게 다양한 클래스들이 있다. 클라이언트에서 이것들을 사용하려면 매우 복잡해질 것이다.
// Facade 패턴을 사용하면 이러한 복잡성을 숨길 수 있다.

// Facade 클래스
class VideoConverter {
  convert(filename: string, format: string) {
    const file = new VideoFile(filename);
    const sourceCodec = CodecFactory.extract(file);

    const buffer = BitrateReader.read(file, sourceCodec);
    let result = BitrateReader.convert(buffer, sourceCodec);
    result = AudioMixer.fix(result);

    return new VideoFile("result");
  }
}

const converter = new VideoConverter();
const mp4 = converter.convert("funny-cats-video.ogg", "mp4");
mp4.save();
