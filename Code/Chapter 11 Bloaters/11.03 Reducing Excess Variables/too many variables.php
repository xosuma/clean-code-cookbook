<?

function retrieveImagesFrom(array $imageUrls) {
  foreach ($imageUrls as $index => $imageFilename) {
    $imageName = $imageNames[$index];
    $fullImageName = $this->directory() . "\\" . $imageFilename;
    if (!file_exists($fullImageName)) {
      if (str_starts_with($imageFilename, 'https://cdn.example.com/')) {
          $url = $imageFilename;
          // 변수의 범위를 지정할 때 이러한 변수 중복은 실제로 필요하지 않습니다.        
          $saveto= "c:\\temp"."\\".basename($imageFilename);
          $ch = curl_init ($url);
          curl_setopt($ch, CURLOPT_HEADER, 0);
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
          $raw = curl_exec($ch);
          curl_close ($ch);
          if(file_exists($saveto)){
               unlink($saveto);
          }
          $fp = fopen($saveto,'x');
          fwrite($fp, $raw);
          fclose($fp);
          $sha1 = sha1_file($saveto);
          $found = false;
          $files = array_diff(
            scandir($this->directory()), 
            array('.', '..'));
          foreach ($files as $file){
              if ($sha1 == sha1_file($this->directory()."\\".$file)) {
                  $images[$imageName]['remote'] = $imageFilename;
                  $images[$imageName]['local'] = $file;
                  $imageFilename = $file;
                  $found = true;
                  // Iteration keeps going on even after you found it
              }
          }
          if (!$found){
            throw new \Exception('이미지 찾기 실패');
         }
        // 이 시점에서 디버깅하면 컨텍스트가 더 이상 필요하지 않은
        // 이전 실행의 변수로 오염되어 있습니다.
        // 예를 들면 curl 핸들러입니다.
      }
    }
  }
}