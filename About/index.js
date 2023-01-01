function toggleAboutBoxSettings(about_box_index)
{
    let about_box = document.getElementsByClassName(about_box_index)[0];
    let about_box_title = about_box.getElementsByClassName("about-box-title")[0];
    let about_box_dropdown = about_box.getElementsByClassName("about-box-dropdown")[0];
    if (about_box.classList.contains("hide"))
    {
        about_box.classList.remove("hide");
        about_box.classList.add("show");
        about_box_title.classList.add("show");
        about_box_dropdown.classList.add("show");
    }
    else
    {
        about_box.classList.add("hide");
        about_box.classList.remove("show");
        about_box_title.classList.remove("show");
        about_box_dropdown.classList.remove("show");
    }
}
