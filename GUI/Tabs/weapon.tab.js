// weapon.tab.js

Tabs.weapon = function ()
{
    ImGui.Text("Striker / Scorpion");

    ImGui.Checkbox("Aim-Bot##striker", strikerData.aimBot.access);

    ImGui.SameLine();

    ImGui.Checkbox("No Laser##striker", strikerData.noLaser.access);

    ImGui.SameLine();

    ImGui.Checkbox("Rockets Teleport##striker", strikerData.shellsTeleport.access);

    ImGui.Checkbox("Lock Target With Scope##striker", strikerData.getTargetWithScope.access);

    ImGui.Separator();
}