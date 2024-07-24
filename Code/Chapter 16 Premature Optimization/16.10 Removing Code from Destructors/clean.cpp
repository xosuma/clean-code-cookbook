class File {
public:
    File() : file_(nullptr) {}
    
    bool Open(const std::string& filename) {
        if (file_) {
            fclose(file_);
        }
        file_ = fopen(filename.c_str(), "r");
        return (file_ != nullptr);
    }
    
    bool IsOpen() const {
        return (file_ != nullptr);
    }
    
    void Close() {
        if (file_) {
            fclose(file_);
            file_ = nullptr;
        }
    }
    
    ~File() {
        // 파일이 열려 있으면 파일을 닫는 대신 예외를 던집니다(잘못된 시나리오).
        if (file_) {
            throw std::logic_error(
                "파일이 소멸자에 도달한 후에도 여전히 열려 있습니다");
        }
    }
    
private:
    FILE* file_;
};
