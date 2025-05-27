<?php

class Control {
    protected $_background;
    protected $_width;
    protected $_height;
    protected $_name;
    protected $_value;

    public function __construct($background, $width, $height, $name, $value) {
        $this->_background = $background;
        $this->_width = $width;
        $this->_height = $height;
        $this->_name = $name;
        $this->_value = $value;
    }
}


class Input extends Control {

}


class Radio extends Input {
    private $isChecked;

    public function __construct($background, $width, $height, $name, $value, $_isChecked) {
        parent::__construct($background, $width, $height, $name, $value);
        $this->setCheckedState($_isChecked);
    }

    public function getCheckedState() {
        return $this->isChecked;
    }

    public function setCheckedState($state) {

        if ($state === true || strtolower($state) === 'true') {
            $this->isChecked = true;
        } else {
            $this->isChecked = false;
        }
    }
}


class Checkbox extends Input {
    private $isChecked;

    public function __construct($background, $width, $height, $name, $value, $_isChecked) {
        parent::__construct($background, $width, $height, $name, $value);
        $this->setCheckedState($_isChecked);
    }

    public function getCheckedState() {
        return $this->isChecked;
    }

    public function setCheckedState($state) {
        if ($state === true || strtolower($state) === 'true') {
            $this->isChecked = true;
        } else {
            $this->isChecked = false;
        }
    }
}

class Select extends Control {
    private $items = [];

    public function __construct($background, $width, $height, $name, $_value, array $_items) {
        parent::__construct($background, $width, $height, $name, $_value);
        this->setItems($_items);
    }

    public function getItems() {
        return $this->items;
    }

    public function setItems(array $_items) {
       $this->items = $_items;
}

public function getSelectedValue() {
return htmlspecialchars($this->_value);
}
}


function convertToHTML($obj) {
if ($obj instanceof Radio) {
return sprintf(
'<input type="radio" name="%s" value="%s" style="background:%s; width:%dpx; height:%dpx;" %s />',
htmlspecialchars($obj->_name),
htmlspecialchars($obj->_value),
htmlspecialchars($obj->_background),
(int)$obj->_width,
(int)$obj->_height,
$objs->getCheckedState() ? 'checked' : ''
);
} elseif ($obj instanceof Checkbox) {
return sprintf(
'<input type="checkbox" name="%s" value="%s" style="background:%s; width:%dpx; height:%dpx;" %s />',
htmlspecialchars($obj->_name),
htmlspecialchars($obj->_value),
htmlspecialchars($obj->_background),
(int)$obj->_width,
(int)$obj->_height,
$objs->getCheckedState() ? 'checked' : ''
);
} elseif ($obj instanceof Select) {
$html = sprintf('<select name="%s" style="background:%s; width:%dpx; height:%dpx;">', htmlspecialchars($obj->_name), htmlspecialchars($obj->_background), (int)$obj->_width, (int)$obj->_height);
foreach ($obj->getItems() as $item) {
$selected = ($item == htmlspecialchars($obj->getSelectedValue())) ? 'selected' : '';
$html .= sprintf('<option value="%s" %s>%s</option>', htmlspecialchars($item),$selected,$item);
}
$html .= '</select>';
return $html;
} else {

return '';
}
}


$radioMale = new Radio('#fff', 20, 20,'gender','male', true);
$radioFemale = new Radio('#fff', 20, 20,'gender','female', false);


$checkboxAgree = new Checkbox('#eee', 15, 15,'agree','yes', false);


$countries = ['Россия', 'Украина', 'Беларусь'];
$selectCountry = new Select('#ddd', 200, 30,'country','Россия',$countries);

?>

<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<title>Форма регистрации</title>
</head>
<body>

<h2>Регистрационная форма</h2>
<form method="post" action="">
<p>Пол:</p>
<label><?= convertToHTML($radioMale); ?> Мужчина</label><br />
<label><?= convertToHTML($radioFemale); ?> Женщина</label><br />

<p>Страна:</p>
<?= convertToHTML($selectCountry); ?>

<p><label><?= convertToHTML($checkboxAgree); ?> Я согласен(-на)</label></p>

<input type="submit" value="Отправить" />
</form>

</body>
</html>