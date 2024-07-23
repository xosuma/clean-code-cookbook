<?

function retrieveImagesFrom(string imageUrls) {
  foreach ($imageUrls as $index => $imageFilename) {
    $imageName = $imageNames[$index];
    $fullImageName = $this->directory() . "\\" . $imageFilename;
    if (!file_exists($fullImageName)) {
        if ($this->isRemoteFileName($imageFilename)) {
            $temporaryFilename = 
              $this->temporaryLocalPlaceFor($imageFilename);
            $this->retrieveFileAndSaveIt(
              $imageFilename,
              $temporaryFilename);
            $localFileSha1 = sha1_file($temporaryFilename);
            list($found, $images, $imageFilename) = 
              $this->tryToFindFile(
                $localFileSha1, $imageFilename, $images, $imageName);
            if (!$found) {
                throw new Exception(
                  '로컬에서 파일을 찾을 수 없습니다. (' . $imageFilename 
                + ') 다시 찾아서 저장해야 합니다.');
            }
        } else {
            throw new \Exception('이미지가 더 이상 디렉터리에 존재하지 않습니다 ' .
               $fullImageName);
        }
    }
  }
}